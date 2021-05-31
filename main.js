var imagearray=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg"];
var namearray=["My Family Book","Krishna Goel","Satish Goel","Raman Goel","Khushboo Goel","Ojaswi Goel","Soumya Goel"];
var count=0;
function next(){
    if(count==7){
        count=0;
    }
document.getElementById("book").src=imagearray[count];
document.getElementById("members").innerHTML=namearray[count];
count++;
}