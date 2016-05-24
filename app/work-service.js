angular.module('resume').service('WorkService', function(){
        
    this.education = [{
        fullURL: 'https://boisecodeworks.com/',
        shortURL: 'boisecodeworks.com',
	    place: "BoiseCodeWorks",
		img: 'bcw.png',
        course: 'Web Development Immersive Course',
        subCourse: '',
        period: 'April - June 2016',
        address: 'Boise, ID, USA',
        description: "The Immersive Course is a full-time experience designed for students looking to start a career in programming. As an Immersive student I learned both front-end and back-end technologies, worked in groups under the supervision of experienced mentors to create fully functional real-world applications."
    },{
        fullURL: 'https://guu.ru/?page_id=19813&lang=en',
        shortURL: 'guu.ru',
	    place: "State University of Management",
		img: 'sum.png',
        course: 'Master’s Degree',
        subCourse: 'Transport Management (combined bachelor/master program)',
        period: 'September 1997 - June 2002',
        address: 'Moscow, Russia',
        description: "Five year program specialized in management, technology, communications and accounting for motor transport companies and business transport departments."
    }];
    

     var works = [];
     
     this.getWorks = function(){
         return works;
     }
          /* <div class="col-xs-12 place">
           <div class="col-md-3 col-xs-12 text-center">
                <a class="center-block" href="http://www.volvotrucks.com/" target="_blank"> <img src="asset/img/volvo.png" alt="volvo"  title=" Volvo Trucks"style="padding: 60px 0 10px 0"></a>
           </div>
           <div class="col-md-7 col-xs-12">
               <h2>Senior Product Engineer</h2>
               <h4> 
                   <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> July 2010 - October 2015 |
                   <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span> Moscow, Russia |
                   <span class="glyphicon glyphicon-link" aria-hidden="true"></span> <a target="_blank" href="http://www.volvotrucks.com/"> volvotrucks.com </a>
               </h4>
               <p align="justify">Promoted Volvo telematics services, provided technical support for customers and team members. 
                  Established new consulting service using Volvo’s telematics data to increase efficiency of customer's business.</p>
           </div>
        </div>
        
        <div class="col-xs-12 place">
           <div class="col-md-3 col-xs-12 text-center">
                <a class="center-block" href="http://ru.total.com/en" target="_blank"> <img src="asset/img/total.png" alt="total" title="TOTAL E&P Russia" style="padding: 50px 0 10px 0" width="80px"></a>
           </div>
           <div class="col-md-7 col-xs-12">
               <h2>Transportation coordinator</h2>
               <h4> 
                   <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> February 2008 - June 2010 |
                   <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span> Moscow, Russia |
                   <span class="glyphicon glyphicon-link" aria-hidden="true"></span> <a target="_blank" href="http://ru.total.com/en"> total.com </a>
               </h4>                
               <p align="justify">Managed company carpool of cars, managed drivers, and oversaw staff/customer transportation services.
                Oversaw contract compliance with leasing, insurance, transportation and other corporate partners.</p>
           </div>
        </div>
       
        
        <div class="col-xs-12 place">
           <div class="col-md-3 col-xs-12 text-center">
                <a class="center-block" href="http://www.danone.com/" target="_blank"> <img src="asset/img/danone.png" alt="danone" title="Danone / Unimilk" style="padding: 50px 0 10px 0" width="80px"></a>
           </div>
           <div class="col-md-7 col-xs-12">
               <h2>Transportation Manager</h2>
               <h4> 
                   <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> October 2006 - August 20070 |
                   <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span> Moscow, Russia |
                   <span class="glyphicon glyphicon-link" aria-hidden="true"></span> <a target="_blank" href="http://www.danone.com/"> danone.com </a>
               </h4>                
               <p align="justify">Managed corporate carpool of cars, supervised drivers, and oversaw transportation services for staff and visitors.
                    Developed transportation plans, policies and budgets</p>
           </div>
        </div>*/
});