function getRandomNumber()
{
    return Math.floor(Math.random() *9000) + 1000;
}
const btn = document.querySelector('#btn-otp');
btn.addEventListener('click', ()=>
{
    const otp = getRandomNumber();
    alert("Your OTP is " + otp);    
});
