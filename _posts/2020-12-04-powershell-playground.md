---
layout: post
title: Powershell Playground
post-image: "../../assets/images/code.png"
description: Let's get started
tags:
- code
- powershell
- learning

---
This post is going to be a centralized place that I drop little tidbits of code that I've learned when working on powershell.

It will also give me a chance to work on how to build code in Jekyll, and learn how to block out code.

```Powershell
#Decode encoded values from a powershell
$text = [System.Convert]::FromBase64String("UwB1AHQALQBMAG8AYwBhAHQAaQBvAG4AIAAnAEMAOgBcACcA")
[System.Text.Encoding]::Unicode.GetString($text)

#Find your public IP
(Invoke-WebRequest -Uri "http://ifconfig.me/ip").Content

#Make a random file (1MB in the example - 1048576 bytes)
$out = New-Object Byte[] 1048576;(New-Object Random).NextBytes($out);[IO.File]::WriteAllBytes('C:\temp\randomfile.bin',$out)

#Establish a remote session and execute a command on the remote host
#This leverages PSSessions, and you need to verify WinRM is running properly
#Script will need to be copied remotely to the workstation before running
$session = New-PSSession -ComputerName <HOSTNAME>
Invoke-Command -Session $session -ScriptBlock {Invoke-Expression "C:\temp\script.bat"}
```