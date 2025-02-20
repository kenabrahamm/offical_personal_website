import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function SVBPage() {
  return (
    <div className="container mx-auto py-6 px-2 sm:px-2 space-y-6">
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-3xl">
        <Link href="/content/writing/svb" className="hover:underline">
          My philosophy on money; why I built Intentions
        </Link>
      </h1>
      <p className="text-muted-foreground">April 22, 2023 (Edited in Feb 2025) -  2 minute read</p>
      <Separator/>
      
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        
I have been curious about exploring how our personalities manifest in the material world, while some turn to astrology or Myers-Briggs tests, I wanted to use something we interact with every day: money, specifically our spending data. This led me to build SavebyValues, which later became Intentions.
      </p>

      {/* <p className="leading-7 [&:not(:first-child)]:mt-6">
        While some turn to astrology or a myers briggs test for data, I wanted to use something that we interact with everyday, money, more specifically our spending. This lead me to build SavebyValues which later became Intentions.
      </p> */}
      <div className="flex justify-center border-2 border-gray-200 rounded-sm"> 
        <Image 
          src="/svb/pic4.png" 
          alt='pic of the full condo with floor chairs and desks facing windows'
          width={800} 
          height={533} 
          className="rounded-sm" 
          priority 
        />
      </div>

      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        A New Narrative
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Traditionally, when we approach budgeting or saving, it comes from a mindset of scarcity and fear. 
        We are often defensive and confused by the numbers, bracing ourselves as if we&apos;re about to be condemned. 
        My goal with Intentions is to explore a new narrative, one that uses spending as a connection point to something deeper and more important: our values.
      </p>

      {/* <p className="leading-7 [&:not(:first-child)]:mt-6">
        My goal with Intentions was to explore a new narrative, one that uses spending as a connection point to something deeper and more tangible, your values.
      </p> */}

      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        Personal Journey
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
      My relationship with money has been complicated. Growing up as an immigrant kid, I went through the highs and lows of when money did and didn&apos;t exist. Those experiences left me confused about what money truly meant to me. Sometimes I felt like it was meaningless, and at other points I felt like it was the only thing worth striving for.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
      As I grew older and started to reflect, I developed a framework to think about spending in a way that resonated with me, seeing money for what it is, a tool. 
      I learned that by understanding the context behind my how I used this tool, not just &ldquo;What&ldquo; but also Why, with Who, and How it made me feel, 
      I could unlock an important story of who I am and what I value.

      </p>
{/* 
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        When I see $18 dollars spent at a thai restaurant I ask myself, was this because I didn&apos;t want to cook, or was this to enjoy the company of a friend?
      </p>
       */}
      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        Value-Based Decisions
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
      I knew in my life there was behaviors and experiences I want to maximize and minimize. 
      That&apos;s why I built Intentions, a tool that helps you reflect on your spending to understand if it aligns with your values.
      It&apos;s not about judging, rather understanding deeply the decision that were made, which often requires context - What, Why, Who, and How it made you feel.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        By understanding the motivations, people and emotions behind my spending, it gave me the insight to make more value-based decisions.
      </p>

      {/* <p className="leading-7 [&:not(:first-child)]:mt-6">
        We are all aware that delaying the gratification can lead to a better life later, but how much of that takes away from the current moment? These are decision trees that might be taking place sub-consciously as we make decisions, which often involves spending money.
      </p> */}

      {/* <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        North Stars and Themes
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
      In my life, I have north stars as overall guiding points and themes for shorter time periods. A personal north star for me is having a family and kids. I know that if I don&apos;t put myself in a  position to make this happen, I will regret it deeply. So naturally, all the themes within my life must keep this north star in mind.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
       My north star and themes provide me with a starting point to structure my financial goals. For example, this year my theme might be to explore, I don&apos;t know if that means travel, hobbies, where or when, but I want to be in a position where I can take action. Thus in 2023, after accounting for food, shelter and keeping in mind my north star, I would want to spending towards exploration, my interests/hobbies and the world.
      </p> */}

      <p className="leading-7 [&:not(:first-child)]:mt-6">
      I saw my peers  resonating with this approach to finances. This mindset has made finances less daunting, and that is why I built SavebyValues/Intentions to enable others to feel the same way.
      </p>

    
    </div>
  )
}
