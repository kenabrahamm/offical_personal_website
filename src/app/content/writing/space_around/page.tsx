import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PalindromePage() {
  return (
    <div className="container mx-auto py-6 px-2 sm:px-2 space-y-6">
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-3xl">
        <Link href="/content/writing/space_around" className="hover:underline">
          The Space Around You Matters
        </Link>
      </h1>
      <p className="text-muted-foreground">January 2023 - 2 minute read</p>
      <Separator/>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
          When I moved out, my roommate and I discussed how we wanted to feel in the space. We landed on no couch and no TV.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      There is no right or wrong living setup. I thought it would be fun to experiment with a decision that&apos;s reversible.
      </p>
      <div className="flex justify-center"> 
        <Image 
          src="/space_around/pic1.jpg" 
          alt='pic of the full condo with floor chairs and desks facing windows'
          width={800} 
          height={533} 
          className="rounded-sm" 
          priority 
        />
      </div>

      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        Introducing the Space
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
      In the space, there&apos;s a circular table surrounded by three floor chairs, while both our desks and monitors face the windows.
      </p>
      <div className="flex justify-center"> 
        <Image 
          src="/space_around/pic3.jpeg" 
          alt='pic of the table'
          width={800} 
          height={533} 
          className="rounded-sm" 
          priority 
        />
       </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Link to chair: <Link href="https://amzn.to/3jY1kq0" className="font-medium text-primary underline underline-offset-4">https://amzn.to/3jY1kq0</Link>
      </p>

      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        Creating Intentionality
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Core premise: Your undivided attention is your most valuable asset.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Humans are visual creatures, or at least I am, so it&apos;s natural for us to focus on the things around us. I wanted to remove the default center of focus, the TV. By doing this there&apos;s space for a new one to emerge, one that is centered around people, one where you&apos;re less passively engaged. There were so many times I found myself scrolling on my phone watching TV, getting nothing out of either experience.
          
        Now I find myself sitting down looking blankly at nothing, since there&apos;s nothing I am supposed to look at, other activities take it&apos;s place. 
        Sometimes I sit and listen to music, or just sit with no objective in mind, eventually my eyes shift focus to one of books on the table and I end up reading.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        For watching content, I regularly book out the condo theater room, which is always available, or just watch on my laptop. In all fairness I don&apos;t watch much TV, but when I do I like the sense of occasion and engagement the theater room brings.
      </p>

      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        A Childlike Wonder
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        In this world it&apos;s very easy to take yourself too seriously. Many of us lead very busy lives filled with deadlines, stress and obligations. You might be working on new technology in emerging markets, or high value deals, or at the edge of artistic vision, all this makes it really easy to take yourself too seriously.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        When you&apos;re sitting on the floor it brings you back to a simpler time. It brings everyone to the same level, a more intimate state where we can all feel a bit more like a kid again. My friends and I joke that the setup is a lot like a kindergarten classroom, with colouring pencils, paper and books in the middle.  At first there&apos;s confusion, excitement or a bit of hesitation, after a while I always find people doodling or using the scroll to explain thoughts or just play tic-tac-toe, in either situation I find it more dynamic than watching TV.
      </p>

      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        Practicality
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        It&apos;s cheap. 3 floor chairs and 1 fancy swivel chair, brand new, cost us a total of $360, it&apos;s tough finding  a used sofa for that price. It also an ideal to cuddle with your partner without falling, we&apos;ve all been there, you can&apos;t fall if you&apos;re already on the floor.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Since the chairs fold and lay flat, it is always easy to store away and create space, great for morning stretches or playing games. My favourite part of the compact size and low position is how it creates less visual clutter and a feeling of openness throughout the space. 
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The seats also encourage you to sit in varied positions, cross legged, stretched out or a weird crab stance, which is great for mobility and breaks up my chair sitting.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        It isn&apos;t for everyone, some need their couch and TV, but truthfully, I always sat on the floor even when there was a couch, so in my own space I decided to experiment.
      </p>

     
   
    </div>
    
  )
}