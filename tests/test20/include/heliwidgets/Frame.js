/*********************************************************************

  Frame.js

  This file is part of Heliwidgets library for Helios framework.

 __Copying:___________________________________________________________

     Copyright 2008, 2009 Dmitry Prokashev

     Heliwidgets  is free  software:  you can  redistribute it  and/or
     modify it  under the terms of  the GNU General  Public License as
     published by  the Free Software  Foundation, either version  3 of
     the License, or (at your option) any later version.

     Heliwidgets is  distributed in the  hope that it will  be useful,
     but WITHOUT  ANY WARRANTY; without  even the implied  warranty of
     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
     General Public License for more details.

     You should have received a copy of the GNU General Public License
     along    with   the   Heliwidgets    library.    If    not,   see
     <http://www.gnu.org/licenses/>.


 __Description:_______________________________________________________

     Defines heliwidgets.Frame  Widget used  for creating a  block for
     adding other widgets on it


 __Objects declared:__________________________________________________

 heliwidgets.Frame                                 - Frame constructor
 --heliwidgets.Frame public properties: ------------------------------
  frameType       - string js.Property keeping the value of frame type


*********************************************************************/

include( "heliwidgets.js" );
include( "Widget.js" );
include( "../js/Property.js" );
include( "../js/Signal.js" );

init = function() {

    // keeps heliwidgets routines
    // a shorter name for better reading of this file
    var hw = heliwidgets;


    // Frame constructor.
    //
    // Argument:
    // - initStruc is a structure to initialize widget with
    hw.Frame = function( initStruc ) {
	// overridding widget's  name, used in  _create() and _destroy()
	// to find out corresponding engine routines
	this._widgetType = "Frame";

	// particular  widget  type properties  should  be created  before
	// parent constructor is called

	// "normal", "lower" or "glass"
	this.frameType = new js.Property( "normal" );

	//parent constructor
        hw.Widget.call( this, initStruc );
	
    }
    hw.Frame.prototype = new hw.Widget();
    
}
