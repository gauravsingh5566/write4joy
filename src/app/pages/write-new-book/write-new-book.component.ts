import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-write-new-book',
  templateUrl: './write-new-book.component.html',
  styleUrls: ['./write-new-book.component.scss']
})
export class WriteNewBookComponent implements OnInit {
  
  pageTitle = 'Write New Book';
  collectionSize = 1;
  previousPage: any;
  page = 1;
  url:any;
  constructor(private location:Location) { }

  ngOnInit(): void {
    $('.choose').on('click',function(){
      $('.choose').removeClass('selected');
      $(this).addClass('selected');
    });

    // $(document).on('click', '.next', function () {
    //   const last = $(this).siblings().last();
    //   if (!last.hasClass('active')) {
    //     const active = $(this).siblings('.active');
    //     const nextItem = active.next();
    //     const link = nextItem.children('a').prop('href');
    //     active.removeClass('active');
    //     nextItem.addClass('active');
    //     window.location.href = link;
    //   }
    // });
    $(document).ready(function(){
      $('.nav li').click(function(){
          $(this).addClass('active');
          $(this).siblings().removeClass('active');
  
      });
  
  });

    $('#page1').click(function(){
        (document.getElementById('form_level') as HTMLFormElement).style.display = 'block';
        (document.getElementById('form_liketowrite') as HTMLFormElement).style.display = 'none';
        (document.getElementById('form_wanttodo') as HTMLFormElement).style.display = 'none';
        (document.getElementById('form_genre') as HTMLFormElement).style.display = 'none';
    });

    $('#page2').click(function(){
      (document.getElementById('form_level') as HTMLFormElement).style.display = 'none';
      (document.getElementById('form_liketowrite') as HTMLFormElement).style.display = 'block';
      (document.getElementById('form_wanttodo') as HTMLFormElement).style.display = 'none';
      (document.getElementById('form_genre') as HTMLFormElement).style.display = 'none';
    });

    $('#page3').click(function(){
      (document.getElementById('form_level') as HTMLFormElement).style.display = 'none';
      (document.getElementById('form_liketowrite') as HTMLFormElement).style.display = 'none';
      (document.getElementById('form_wanttodo') as HTMLFormElement).style.display = 'block';
      (document.getElementById('form_genre') as HTMLFormElement).style.display = 'none';
    });

    $('#page4').click(function(){
      (document.getElementById('form_level') as HTMLFormElement).style.display = 'none';
      (document.getElementById('form_liketowrite') as HTMLFormElement).style.display = 'none';
      (document.getElementById('form_wanttodo') as HTMLFormElement).style.display = 'none';
      (document.getElementById('form_genre') as HTMLFormElement).style.display = 'block';
    });

  }

  back(){
     try {
       this.location.back();
     } catch (error) {
        console.log();
     }
  }

  showForm(){
    try {
      document.getElementById('')
    } catch (error) {
      console.log(error);
    }
  }

}
