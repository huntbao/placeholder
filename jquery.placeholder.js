/*
Simple placeholder v1.0
Copyright (C) 2013- Hunt Bao
Hunt Bao - gzooler@gmail.com

https://github.com/huntbao/placeholder

------------------------------------------------------------------------------------------
Description 
------------------------------------------------------------------------------------------
    
Simple placeholder for JavaScript(jQuery)
   
-------------------------------------------------------------------------------------------
License
-------------------------------------------------------------------------------------------
    
This program is free software: you can redistribute it and/or modify
it under the terms of the Lesser GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
    
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
Lesser GNU General Public License for more details.
    
You should have received a copy of the Lesser GNU General Public License
along with this program.  If not, see < http://www.gnu.org/licenses/ >.

*/
(function ($) {
    var isSupported = 'placeholder' in document.createElement('input');
    $.fn.placeholder = function (wrapper) {
        if (isSupported) return this;
        var placeholder = this.attr('placeholder');
        if (!placeholder) return this;
        this.removeAttr('placeholder');
        if (wrapper) {
            this.wrap($('<div class="placeholder-inp-wrap"></div>'));
            $('<label class="placeholder-inp-label">' + placeholder + '</label>').insertBefore(this);
        }
        var checkVal = function (t) {
            if (t.val() === '') {
                t.prev().show();
            } else {
                t.prev().hide();
            }
        };
        this.bind('focus blur keydown paste', function () {
            var t = $(this);
            setTimeout(function () {
                checkVal(t);
            }, 0);
        }).prev().show().click(function () {
                $(this).next().focus();
            });
        return this;
    }
})(jQuery);
