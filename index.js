function fact()
{
   var n=document.getElementById("number").value;
   n=parseInt(n)
   var fact=1;
   for(var i=1;i<=n;i=i+1)
   {
   fact=fact*i;  
    }
document.getElementById("result").value=fact;
}