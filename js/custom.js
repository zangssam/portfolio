$(document).ready(function(){

    $(".port_01 li div a").fancybox();

    $(document).scroll(function(){
        var scrP = $(document).scrollTop();
        var skill_width = $("#skills").offset().top -500

        if(skill_width < scrP){
            $(".skill_list .percent_bar p").addClass("on")
        }
        
        if(skill_width = scrP){
            $({value: 0}).animate({value: 80},{duration: 2000,
                step: function(){
                $(".skill_list .percent_bar_01 p").text(Math.floor(this.value)+"%");
            },
            complete: function(){
                $(".skill_list .percent_bar_01 p").text(Math.floor(this.value)+"%")
            } 
            })
        
            $({value: 0}).animate({value: 90},{duration: 2000,
                step: function(){
                $(".skill_list .percent_bar_02 p").text(Math.floor(this.value)+"%");
            },
            complete: function(){
                $(".skill_list .percent_bar_02 p").text(Math.floor(this.value)+"%")
            } 
            })
        
            $({value: 0}).animate({value: 60},{duration: 2000,
                step: function(){
                $(".skill_list .percent_bar_03 p").text(Math.floor(this.value)+"%");
            },
            complete: function(){
                $(".skill_list .percent_bar_03 p").text(Math.floor(this.value)+"%")
            } 
            })
        
            $({value: 0}).animate({value: 85},{duration: 2000,
                step: function(){
                $(".skill_list .percent_bar_04 p").text(Math.floor(this.value)+"%");
            },
            complete: function(){
                $(".skill_list .percent_bar_04 p").text(Math.floor(this.value)+"%")
            } 
            })
        
            $({value: 0}).animate({value: 80},{duration: 2000,
                step: function(){
                $(".skill_list .percent_bar_05 p").text(Math.floor(this.value)+"%");
            },
            complete: function(){
                $(".skill_list .percent_bar_05 p").text(Math.floor(this.value)+"%")
            } 
            })
        
            $({value: 0}).animate({value: 95},{duration: 2000,
                step: function(){
                $(".skill_list .percent_bar_06 p").text(Math.floor(this.value)+"%");
            },
            complete: function(){
                $(".skill_list .percent_bar_06 p").text(Math.floor(this.value)+"%")
            } 
            })
        
            $({value: 0}).animate({value: 95},{duration: 2000,
                step: function(){
                $(".skill_list .percent_bar_07 p").text(Math.floor(this.value)+"%");
            },
            complete: function(){
                $(".skill_list .percent_bar_07 p").text(Math.floor(this.value)+"%")
            } 
            })
        
            $({value: 0}).animate({value: 85},{duration: 2000,
                step: function(){
                $(".skill_list .percent_bar_08 p").text(Math.floor(this.value)+"%");
            },
            complete: function(){
                $(".skill_list .percent_bar_08 p").text(Math.floor(this.value)+"%")
            } 
            })
        }

    })

});