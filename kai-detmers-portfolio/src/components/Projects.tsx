// components/Projects.tsx
import React from "react";
import Card from "./Card";

export const Projects: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <Card href='/AR' title='Augmented Reality' text='Watch OS/iOS' image='../images/MapsWatch.png' />
    <Card href='https://www.behance.net/gallery/57691747/DTV-Devils-Teamlogo' title='Illustrator Logos' text='DTV DEVILS' image='/images/Devils.png' />
    <Card href='https://www.homeandsmart.de/alexa-skill-tee-helfer' title='Smart Home' text='Alexa Skill Teehelfer' image='/images/TeeHelfer.png' />
    <Card href='https://www.youtube.com/watch?v=mJ9X260NkJQ' title='Unreal' text='PacBeard' image='../images/unreal.png' />
    <Card href='https://www.youtube.com/watch?v=EhEs9E86DxE' title='Unity VR' text='VRock' image='../images/VRROCK.png' />
    <Card href='https://www.youtube.com/watch?v=XSHMqxWMvUw&feature=youtu.be' title='Unity VR' text='VR Juggling' image='../images/ogimg.jpg' />
    <Card href='/REVEL' title='VR Startup' text='REVEL' image='/images/kleiner.png' />
    <Card href='https://www.facebook.com/groups/SocialVR/?ref=bookmarks' title='Biggest VR Blog in Benelux' text='SocialVR' image='/images/TR.png' />
    <Card href='https://www.heise.de/make/meldung/Interaktive-Lampen-zum-Anfassen-die-Ausstellung-Leuchte-in-Bremen-3249332.html?hg=1&hgi=3&hgf=false' title='Arduino' text='SmartLamp' image='../images/EnlightLogo.png' />
    <Card href='https://www.youtube.com/watch?v=qvqvz7TR3ek' title='Tangible Interfaces' text='Enlight Timer' image='../images/Enlight.jpeg' />
    <Card href='http://temroi.de/Convention.html' title='Bootstrap' text='Event Page' image='../images/Bootstrap.png' />
    <Card href='https://www.youtube.com/watch?v=uDHMpV0LWr8' title='Flutter' text='Flutter Showcase' image='../images/flutter.png' />
      </div>
    </div>
  );
};
