$c = Get-Content styles.css -Raw; $c = $c -replace "(?s)body\.menu-open\{\s*position: fixed;\s*overflow: hidden;\s*\}", ""; Set-Content styles.css $c
