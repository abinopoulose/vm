import{t as e}from"./accounts-B8aSg6tO.js";function t(){let t=[`root:x:0:0:root:/root:/bin/bash`],n=1e3;for(let r of e){let e=r.username.charAt(0).toUpperCase()+r.username.slice(1);t.push(`${r.username}:x:${n}:${n}:${e}:/home/${r.username}:/bin/bash`),n++}return t.push(`nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin`),t.join(`
`)+`
`}function n(){let t=[`root:!:19900:0:99999:7:::`],n=Math.floor(Date.now()/864e5);for(let r of e)t.push(`${r.username}:$PLAIN$${r.password}:${n}:0:99999:7:::`);return t.push(`nobody:*:19900:0:99999:7:::`),t.join(`
`)+`
`}function r(){let t=[`#`,`# This file MUST be edited with the 'visudo' command as root.`,`#`,`# See the man page for details on how to write a sudoers file.`,`#`,``,`# Defaults`,`Defaults	env_reset`,`Defaults	mail_badpass`,`Defaults	secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"`,`Defaults	timestamp_timeout=15`,``,`# Root can do anything`,`root	ALL=(ALL:ALL) ALL`,``,`# Members of the admin group may gain root privileges`,`%admin	ALL=(ALL) ALL`,``,`# Members of the sudo group may execute any command`,`%sudo	ALL=(ALL:ALL) ALL`,``,`# Per-user rules (generated from accounts config)`];for(let n of e)n.role===`admin`&&t.push(`${n.username}\tALL=(ALL:ALL) ALL`);return t.push(``),t.join(`
`)+`
`}function i(){let t=e.filter(e=>e.role===`admin`).map(e=>e.username),n=[`root:x:0:`,`admin:x:4:${t.join(`,`)}`,`sudo:x:27:${t.join(`,`)}`],r=1e3;for(let t of e)n.push(`${t.username}:x:${r}:${t.username}`),r++;return n.push(`nogroup:x:65534:`),n.push(``),n.join(`
`)+`
`}var a=`root`,o=`root-home`,s=e=>`home-${e}`,c=e=>`home-${e}-desktop`,l=e=>`home-${e}-trash`;function u(e,t,n,r,i=``,a=`peasant`,o=`peasant`,s){let c=Date.now(),l=``;return n===`file`&&t.includes(`.`)&&(l=t.split(`.`).pop()||``),{id:e,name:t,type:n,parentId:r,children:[],content:i,createdAt:c,modifiedAt:c,owner:a,group:o,permissions:s||(n===`directory`?`755`:`644`),meta:{extension:l}}}function d(){let s={};s[a]=u(a,``,`directory`,null,``,`root`,`root`),s[o]=u(o,`home`,`directory`,a,``,`root`,`root`),s[a].children.push(o),e.forEach(e=>{f(s,e.username)});let c=`sys-etc`;s[c]=u(c,`etc`,`directory`,a,``,`root`,`root`),s[a].children.push(c);let l=`sys-etc-hostname`;s[l]=u(l,`hostname`,`file`,c,`ubuntu-web
`,`root`,`root`),s[c].children.push(l);let d=`sys-etc-passwd`;s[d]=u(d,`passwd`,`file`,c,t(),`root`,`root`,`644`),s[c].children.push(d);let p=`sys-etc-shadow`;s[p]=u(p,`shadow`,`file`,c,n(),`root`,`shadow`,`640`),s[c].children.push(p);let m=`sys-etc-sudoers`;s[m]=u(m,`sudoers`,`file`,c,r(),`root`,`root`,`440`),s[c].children.push(m);let h=`sys-etc-group`;s[h]=u(h,`group`,`file`,c,i(),`root`,`root`,`644`),s[c].children.push(h);let g=`sys-etc-fstab`;s[g]=u(g,`fstab`,`file`,c,`# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed.
#
# <file system>  <mount point>  <type>  <options>              <dump>  <pass>
/dev/vda2        /              ext4    errors=remount-ro       0       1
/dev/vda1        /boot          ext4    defaults                0       2
tmpfs            /tmp           tmpfs   nosuid,nodev            0       0
tmpfs            /dev/shm       tmpfs   nosuid,nodev            0       0
proc             /proc          proc    defaults                0       0
`,`root`,`root`,`644`),s[c].children.push(g);let _=`sys-bin`;s[_]=u(_,`bin`,`directory`,a,``,`root`,`root`),s[a].children.push(_);let v=`sys-usr`;s[v]=u(v,`usr`,`directory`,a,``,`root`,`root`),s[a].children.push(v);let y=`sys-usr-bin`;s[y]=u(y,`bin`,`directory`,v,``,`root`,`root`),s[v].children.push(y);let b=`sys-usr-bin-sudo`;s[b]=u(b,`sudo`,`file`,y,`sudo binary`,`root`,`root`,`4755`),s[y].children.push(b);let x=`sys-usr-bin-su`;s[x]=u(x,`su`,`file`,y,`su binary`,`root`,`root`,`4755`),s[y].children.push(x);let S=`sys-usr-bin-passwd`;s[S]=u(S,`passwd`,`file`,y,`passwd binary`,`root`,`root`,`4755`),s[y].children.push(S);let C=`sys-proc`;s[C]=u(C,`proc`,`directory`,a,``,`root`,`root`),s[a].children.push(C);let w=`sys-proc-meminfo`;s[w]=u(w,`meminfo`,`proc_file`,C,`meminfo`,`root`,`root`,`444`),s[C].children.push(w);let T=`sys-proc-cpuinfo`;s[T]=u(T,`cpuinfo`,`proc_file`,C,`cpuinfo`,`root`,`root`,`444`),s[C].children.push(T);let E=`sys-proc-uptime`;s[E]=u(E,`uptime`,`proc_file`,C,`uptime`,`root`,`root`,`444`),s[C].children.push(E);let D=`sys-dev`;s[D]=u(D,`dev`,`directory`,a,``,`root`,`root`),s[a].children.push(D);let O=`sys-dev-null`;s[O]=u(O,`null`,`character_device`,D,`null`,`root`,`root`,`666`),s[D].children.push(O);let k=`sys-dev-zero`;s[k]=u(k,`zero`,`character_device`,D,`zero`,`root`,`root`,`666`),s[D].children.push(k);let A=`sys-dev-random`;s[A]=u(A,`random`,`character_device`,D,`random`,`root`,`root`,`444`),s[D].children.push(A);let j=`sys-dev-vda`;s[j]=u(j,`vda`,`character_device`,D,`block:vda`,`root`,`disk`,`660`),s[D].children.push(j);let M=`sys-dev-vda1`;s[M]=u(M,`vda1`,`character_device`,D,`block:vda1`,`root`,`disk`,`660`),s[D].children.push(M);let N=`sys-dev-vda2`;s[N]=u(N,`vda2`,`character_device`,D,`block:vda2`,`root`,`disk`,`660`),s[D].children.push(N);let P=`sys-dev-tty`;s[P]=u(P,`tty`,`character_device`,D,`tty`,`root`,`tty`,`666`),s[D].children.push(P);let F=`sys-dev-shm`;return s[F]=u(F,`shm`,`directory`,D,``,`root`,`root`,`1777`),s[D].children.push(F),s}function f(e,t,n=o){let r=s(t),i=c(t),a=l(t);if(e[r]){e[n]&&!e[n].children.includes(r)&&e[n].children.push(r),e[r].parentId!==n&&(e[r].parentId=n);return}e[r]=u(r,t,`directory`,n,``,t,t,`750`),e[n]&&!e[n].children.includes(r)&&e[n].children.push(r),e[i]=u(i,`Desktop`,`directory`,r,``,t,t),e[r].children.push(i),e[a]=u(a,`.Trash`,`directory`,r,``,t,t),e[r].children.push(a);let d=`home-${t}-local`;e[d]=u(d,`.local`,`directory`,r,``,t,t),e[r].children.push(d);let f=`home-${t}-local-share`;e[f]=u(f,`share`,`directory`,d,``,t,t),e[d].children.push(f);let p=`home-${t}-local-share-trash`;e[p]=u(p,`Trash`,`directory`,f,``,t,t),e[f].children.push(p);let m=`home-${t}-documents`;e[m]=u(m,`Documents`,`directory`,r,``,t,t),e[r].children.push(m);let h=`home-${t}-welcome-txt`;e[h]=u(h,`welcome.txt`,`file`,m,`Welcome to Ubuntu 24 Web Desktop, ${t}!`,t,t),e[m].children.push(h);let g=`home-${t}-downloads`;e[g]=u(g,`Downloads`,`directory`,r,``,t,t),e[r].children.push(g);let _=`home-${t}-pictures`;e[_]=u(_,`Pictures`,`directory`,r,``,t,t),e[r].children.push(_);let v=`home-${t}-bashrc`;e[v]=u(v,`.bashrc`,`file`,r,`# ~/.bashrc: executed by bash for non-login shells.

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# History settings
HISTSIZE=1000
HISTFILESIZE=2000

# Aliases
alias ll='ls -la'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'
alias cls='clear'
alias grep='grep --color=auto'

# Custom prompt
PS1='\\[\\e[32m\\]\\u@\\h\\[\\e[0m\\]:\\[\\e[34m\\]\\w\\[\\e[0m\\]\\$ '

# Source bash_aliases if exists
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
`,t,t),e[r].children.push(v)}export{l as a,s as i,a as n,d as o,c as r,f as s,o as t};