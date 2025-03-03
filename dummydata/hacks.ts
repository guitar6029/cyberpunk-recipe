export type TradeLevel = "low" | "medium" | "high"

import type { StaticImageData } from "next/image";


import hack1 from "@/app/assets/img/biohacks/cards/hulkHandUpgrade.jpg" 
import hack2 from "@/app/assets/img/biohacks/cards/neuralInterfaceHackChip.jpg" 
import hack3 from "@/app/assets/img/biohacks/cards/chromaticEyeEnhancer.jpg" 
import hack4 from "@/app/assets/img/biohacks/cards/stealthCloak.jpg"
import hack5 from "@/app/assets/img/biohacks/cards/cyberneticArm.jpg"
import hack6 from "@/app/assets/img/biohacks/cards/shield.jpg"
import hack7 from "@/app/assets/img/biohacks/cards/sonicDisruptor.jpg"


export type TGadget = {
    id: string
    gadget: string;
    ingredients: string[];
    instructions: string[];
    description: {
        info: string,
        sideEffects: string,
        psychosisPossible: boolean
        tradeExchangeLevel: TradeLevel
    }
    img: StaticImageData,
    shortDescription: string
}

export const gadgets: TGadget[] = [
    {
        id: 'f34545256',
        gadget: "Bio Hulk Hands",
        ingredients: [
            "10x Metal Shards",
            "2x Green Goo (extracted from bioluminescent creatures)",
            "3x Plasma Capsules (from a high-voltage power source)"
        ],
        instructions: [
            "Start by forging the Metal Shards into robust gauntlets. Make sure they fit like a glove—literally.",
            "Mix the Green Goo with Plasma Capsules in a bio-reactor. This concoction will give your hands an extra boost of strength and a vibrant green glow.",
            "Carefully integrate the plasma-infused goo into the gauntlet's framework, ensuring the energy flows through your fingers.",
            "Strap on your Bio Hulk Hands and get ready to smash through any obstacle in your path with sheer cybernetic power!"
        ],
        description: {
            info: "The Bio Hulk Hands transform your average punch into a devastating force. With a neon-green glow emanating from the bioluminescent goo, they channel raw, pulsating energy through every inch of their metallic structure. Feel the power surging through your veins as the gauntlets synchronize with your very being, making you an unstoppable juggernaut in the cyberpunk world. Imagine walking through the rain-soaked streets of a neon-lit metropolis, each stride echoing with the promise of unparalleled strength. These gauntlets aren't just weapons—they're a statement, a testament to the fusion of organic and synthetic might. As you gaze into the green luminescence, you'll notice the intricate dance of plasma within the goo, a visual spectacle of bioengineering mastery. But it's not all about brute force; the design ensures agility and precision, making each movement fluid and controlled. The energy coursing through the Bio Hulk Hands doesn't just amplify your strength; it creates an extension of your will, turning thought into action with frightening efficiency.",
            sideEffects: "Extended use may cause intense muscle fatigue and temporary loss of fine motor skills. Overexposure to plasma energy can lead to hallucinations and severe dehydration.",
            psychosisPossible: true,
            tradeExchangeLevel: "high"
        },
        shortDescription: "Unleash devastating power with neon-green Bio Hulk Hands, merging organic and synthetic might for unmatched strength.",
        img: hack1
    },
    {
        id: 'f34545256',
        gadget: "Neural Interface Hack Chip",
        ingredients: [
            "5x Microchips",
            "1x Neural Gel (harvested from cybernetic labs)",
            "2x Fiber Optic Cables",
            "1x Data Crystal (encrypted with high-level algorithms)"
        ],
        instructions: [
            "Solder the Microchips onto a compact circuit board. This will form the backbone of your Neural Interface Hack Chip.",
            "Submerge the board into Neural Gel to enhance the signal reception and ensure seamless integration with the human brain.",
            "Connect the Fiber Optic Cables to the data ports on the chip, allowing for high-speed data transfer.",
            "Finish by embedding the Data Crystal into the chip, ensuring it’s secure and ready to decrypt any locked neural pathways.",
            "Install the chip into your neural port and unlock the ability to hack into any network with the power of your mind!"
        ],
        description: {
            info: "The Neural Interface Hack Chip is the epitome of digital supremacy. It merges seamlessly with your neural pathways, allowing you to dive deep into the most secure networks. The Data Crystal glows with an eerie blue light, symbolizing the vast ocean of encrypted data at your fingertips. It's not just a tool—it's an extension of your mind, capable of bending the very fabric of cyberspace to your will. Picture yourself navigating through the neon haze of a cyber city, with streams of data flowing effortlessly into your consciousness. The chip's integration is so smooth, it's as if you've always had this power, as if the digital and organic realms were always meant to intertwine within you. The Neural Interface Hack Chip is more than a piece of technology; it's a key to a new dimension of existence. The microchips and fiber optic cables create a neural symphony, harmonizing your thoughts with the pulse of the digital world. With every hack, every infiltration, you're not just accessing information—you're experiencing it, feeling the electric thrill of decoding the universe's secrets. The Neural Gel enhances your brain's receptivity, ensuring every signal is crisp and clear, while the Data Crystal acts as a beacon, guiding you through the labyrinth of data with unwavering precision.",
            sideEffects: "Increased dependency on the chip can lead to severe migraines and cognitive dissonance. Prolonged use may cause neural degradation and memory loss.",
            psychosisPossible: true,
            tradeExchangeLevel: "high"
        },
        shortDescription: "Master the digital realm with the Neural Interface Hack Chip, seamlessly merging your mind with cyberspace for unparalleled hacking prowess.",
        img: hack2
    },
    {
        id: 'f34545257',
        gadget: "Chromatic Eye Enhancer",
        ingredients: [
            "1x Cybernetic Eye Shell",
            "3x Holographic Lenses",
            "2x RGB Spectrum Modules",
            "4x Light Amplification Diodes"
        ],
        instructions: [
            "Insert the Holographic Lenses into the Cybernetic Eye Shell to provide enhanced vision and augmented reality capabilities.",
            "Attach the RGB Spectrum Modules to the internal frame of the eye, giving you the ability to see a full range of colors, even in pitch-black darkness.",
            "Integrate the Light Amplification Diodes around the lens, ensuring they are evenly spaced for maximum light enhancement.",
            "Once assembled, replace your existing eye with the Chromatic Eye Enhancer. Experience the world in vibrant hues and crystal-clear clarity, no matter the conditions."
        ],
        description: {
            info: "The Chromatic Eye Enhancer redefines perception in the neon-lit streets of the city. Its holographic lenses adapt to any environment, providing unparalleled visual clarity and augmented reality overlays. The RGB Spectrum Modules let you see in vivid, surreal colors, while the Light Amplification Diodes ensure that even the darkest alleys are illuminated. It's more than an eye—it's a window to a technicolor reality. Imagine walking through a bustling metropolis, where every sign, every shadow is vividly etched in your vision. The Chromatic Eye Enhancer doesn't just upgrade your sight; it transforms your experience of the world, making the mundane extraordinary. Each glance reveals the hidden layers of the urban jungle, from the subtleties of human expressions to the intricate details of cybernetic enhancements around you. The augmented reality capabilities overlay crucial information right before your eyes, turning every interaction into a seamless blend of reality and data. Whether navigating through a chaotic marketplace or scoping out a high-stakes rendezvous, the Chromatic Eye Enhancer ensures you're always one step ahead, seeing the unseen and anticipating the unexpected.",
            sideEffects: "Users may experience temporary vertigo and disorientation. Extended use can lead to eye strain and visual anomalies.",
            psychosisPossible: false,
            tradeExchangeLevel: "low"
        },
        shortDescription: "Enhance your vision with the Chromatic Eye Enhancer, experiencing vivid colors and augmented reality in any environment.",
        img: hack3
    },
    {
        id: 'f34545258',
        gadget: "Stealth Cloak",
        ingredients: [
            "8x Nano-Fabric Panels",
            "2x Quantum Reflectors",
            "1x Electro-Magnetic Pulse Generator",
            "1x Stealth Modulator Chip"
        ],
        instructions: [
            "Weave the Nano-Fabric Panels together to create a cloak that’s both lightweight and highly durable.",
            "Embed the Quantum Reflectors into the fabric, allowing them to bend light and render you invisible to the naked eye.",
            "Attach the Electro-Magnetic Pulse Generator to the back of the cloak, enabling it to disrupt electronic sensors and cameras.",
            "Install the Stealth Modulator Chip in the cloak’s collar, providing on-demand activation of your invisibility feature.",
            "Drape yourself in the Stealth Cloak and slip through the city unnoticed, leaving no trace behind."
        ],
        description: {
            info: "The Stealth Cloak is a masterpiece of urban espionage. Its nano-fabric panels shimmer in the darkness, while Quantum Reflectors twist light around you, making you a ghost in the cyber world. The Electro-Magnetic Pulse Generator disrupts any electronic surveillance, and the Stealth Modulator Chip ensures that your presence goes undetected. Perfect for covert operations and navigating the neon labyrinth unnoticed. As you weave through the bustling streets, the cloak melds with your movements, rendering you a phantom amidst the chaos. Every step, every motion is cloaked in an aura of mystery, making you both untouchable and unforgettable. The Stealth Cloak's fabric is more than just a material—it's a marvel of engineering, blending advanced technology with unparalleled craftsmanship. The Quantum Reflectors create a seamless field of invisibility, bending light and shadows to your will. With a flick of the Stealth Modulator Chip, you can slip in and out of sight, leaving behind only whispers of your presence. Whether infiltrating high-security zones or evading pursuers, the Stealth Cloak ensures you're always a step ahead, a silent specter in the digital age.",
            sideEffects: "Continuous use may cause dizziness and a sense of detachment from reality. The cloak can also interfere with personal electronic devices.",
            psychosisPossible: false,
            tradeExchangeLevel: "low"
        },

        shortDescription: "Become a ghost in the neon-lit city with the Stealth Cloak, rendering yourself invisible and undetectable to both eyes and sensors.",
        img: hack4
    },
    {

        id: 'f34545259',
        gadget: "Cybernetic Arm",
        ingredients: ["12x Titanium Plates", "4x Hydraulic Pistons", "3x Neural Interface Cables", "2x Energy Cells (high capacity)", "1x Multi-tool Attachment Kit"],
        instructions: [
            "Start by assembling the Titanium Plates to create a durable and lightweight arm structure.",
            "Install the Hydraulic Pistons to provide enhanced strength and flexibility.",
            "Connect the Neural Interface Cables to ensure seamless control and responsiveness.",
            "Incorporate the Energy Cells into the arm to power all the integrated systems.",
            "Attach the Multi-tool Kit, which includes tools like a plasma cutter, data spike, and grappling hook.",
            "Integrate everything together and sync it with your neural network. Now you're ready to take on any challenge with your new Cybernetic Arm!"],
        description: {
            info: "The Cybernetic Arm is the ultimate augmentation for the modern warrior. Constructed from Titanium Plates, it offers unparalleled strength and durability. Hydraulic Pistons provide enhanced power and flexibility, while Neural Interface Cables ensure that every movement is fluid and natural. The Multi-tool Kit transforms your arm into a versatile tool of survival, perfect for the dystopian streets of the future. Imagine the sensation of raw power at your fingertips, seamlessly integrated with your neural network, allowing you to crush obstacles and manipulate your environment with superhuman precision.",
            sideEffects: "Initial integration may cause phantom limb sensations and discomfort. Long-term use can lead to neural fatigue and the risk of over-dependence on the augmentation.",
            psychosisPossible: true,
            tradeExchangeLevel: "high"
        },
        shortDescription: "The Cybernetic Arm is the ultimate augmentation for the modern warrior. Constructed from Titanium Plates, it offers unparalleled strength and durability.",
        img: hack5
    },
    {
        id: 'f34545260',
        gadget: "Quantum Shield Generator",
        ingredients: [
            "5x Quantum Particles",
            "4x Electro-Magnetic Coils",
            "2x Energy Cores (high-density)",
            "1x Holographic Interface"
        ],
        instructions: [
            "Harvest the Quantum Particles using a particle accelerator and store them in a containment field.",
            "Wrap the Electro-Magnetic Coils around the containment field to stabilize and harness the quantum energy.",
            "Insert the high-density Energy Cores into the base of the generator to provide a continuous power supply.",
            "Integrate the Holographic Interface to control the shield's deployment and strength.",
            "Activate the Quantum Shield Generator to project an impenetrable barrier around you, capable of deflecting both physical and energy-based attacks."
        ],
        description: {
            info: "The Quantum Shield Generator is the pinnacle of personal defense technology in the cyberpunk universe. Utilizing the raw power of quantum particles, it creates a shimmering, translucent barrier that can withstand even the most formidable assaults. Imagine the thrill of activating your shield in the midst of a high-speed chase through neon-lit streets, the world around you blurring as the shield absorbs and deflects incoming projectiles. The Electro-Magnetic Coils hum with energy, and the Holographic Interface provides real-time feedback, allowing you to adjust the shield's parameters with a simple gesture.",
            sideEffects: "Prolonged use may cause a build-up of static electricity and temporary disorientation. In rare cases, the quantum field may interfere with electronic devices and disrupt communication signals.",
            psychosisPossible: false,
            tradeExchangeLevel: "high"
        },
        shortDescription: "Equip yourself with the Cybernetic Arm for unmatched strength, durability, and versatility, perfect for the dystopian streets of the future.",
        img: hack6
    },
    {

        id: 'f34545261',
        gadget: "Sonic Disruptor Gauntlet",
        ingredients: [
            "8x Sonic Emitters",
            "3x Vibranium Plates",
            "2x Resonance Crystals",
            "1x Control Module (with frequency tuner)"
        ],
        instructions: [
            "Install the Sonic Emitters into the gauntlet’s framework to create a directional sound blast mechanism.",
            "Layer the Vibranium Plates around the emitters to absorb recoil and enhance durability.",
            "Embed the Resonance Crystals into the gauntlet to amplify and modulate the sonic waves.",
            "Integrate the Control Module with a frequency tuner for precise manipulation of the sonic output.",
            "Activate the Sonic Disruptor Gauntlet to unleash powerful sonic waves capable of incapacitating enemies and shattering obstacles."
        ],
        description: {
            info: "The Sonic Disruptor Gauntlet is a marvel of acoustic warfare, designed to transform sound into a devastating weapon. Imagine standing in the heart of a cyberpunk city, the neon lights reflecting off your gauntlet as you prepare to unleash a concussive blast of sonic energy. The Sonic Emitters vibrate with power, their frequency tuned to the precise resonance needed to disorient foes and dismantle barriers. The Vibranium Plates ensure that the gauntlet remains resilient, absorbing the shock of each pulse while the Resonance Crystals glow with an ethereal light, channeling the sonic force with precision.",
            sideEffects: "Extended use may lead to temporary hearing loss and disorientation. Prolonged exposure to high-frequency sound waves can cause nausea and headaches.",
            psychosisPossible: false,
            tradeExchangeLevel: "high"
        },
        shortDescription: "Harness the power of sound with the Sonic Disruptor Gauntlet, unleashing concussive blasts to incapacitate foes and shatter obstacles.",
        img: hack7
    }

]