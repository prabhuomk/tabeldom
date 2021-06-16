var table=document.createElement('table');
table.setAttribute('class','table');

var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');

var tr=document.createElement('tr');
var th1=create('th','fname');
var th2=create('th','lname');
var th3=create('th','email');
tr.append(th1,th2,th3);
thead.append(tr);

var tbody=document.createElement('tbody');
tbody.setAttribute('class','tbody-dark');

var tr1=document.createElement('tr');
var td11=create('td','prabhu');
var td12=create('td','karan');
var td13=create('td','pk');
tr1.append(td11,td12,td13);

var tr2=document.createElement('tr');
var td21=create('td','meena');
var td22=create('td','valli');
var td23=create('td','kp');
tr2.append(td21,td22,td23);

tbody.append(tr1,tr2);
table.append( thead,tbody);
document.body.append(table);

function create(elementname,value="")
{
    var tdtr=document.createElement(elementname);
    tdtr.innerHTML=value;
    return tdtr;
}