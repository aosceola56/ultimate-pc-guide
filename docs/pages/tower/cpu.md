# Choosing a Processor

::: warning
I, DatGamer56, am biased towards AMD. This is due to the recent Intel scandals that have been occurring regarding their latest CPUs.

I always try to maintain an unbiased opinion when writing articles like these, but some favoritism may show.
:::

Avoid Intel
Minimum cores = 6
Avoid Overspending
Use Aliexpress wisely
Check pcie support
What do the letters mean    
Socket names
Integrated graphics
Bundled coolers
memory compatibility
X3D Chips
Ryzen and Core / Ultra only

[[toc]]


## What is a CPU?

The **Central Processing Unit (CPU)** is the brain of your computer. It performs the calculations and operations necessary to run programs, process input, and control other components. It determines how fast and efficiently your PC handles tasks like gaming, video editing, browsing, or running software.

### What Does a CPU Do?

- **Executes Instructions**: Runs software programs by processing code instructions.
- **Handles Multitasking**: Juggles multiple processes at once using multiple cores and threads.
- **Communicates with Hardware**: Works alongside your GPU, RAM, storage, and motherboard.

### Let's Learn Some Terms

Here are some essential CPU-related terms:

| Term             | Meaning |
|------------------|---------|
| **Core**         | An individual processing unit within the CPU. More cores = better multitasking. |
| **Thread**       | A virtual version of a core. CPUs can handle multiple threads per core (e.g., SMT or Hyper-Threading). |
| **Clock Speed**  | Measured in GHz (Gigahertz), it determines how many cycles a CPU can perform per second. |
| **Cache**        | Small memory built into the CPU for quick access to frequently used data. |
| **TDP (Thermal Design Power)** | The amount of heat the CPU generates under load. Helps determine cooling needs. |
| **Socket Type**  | The physical and electrical interface between the CPU and the motherboard. Must match. |
| **Integrated Graphics (iGPU)** | A built-in GPU within the CPU. Useful if you don’t have a dedicated GPU.<sup>1</sup> |
| **Overclocking** | Increasing the CPU’s clock speed beyond the factory spec for extra performance (requires adequate cooling). |

## Major CPU Brands

- **Intel**: Known for strong single-core performance and integrated graphics. Common series: Core i3/i5/i7/i9.
::: warning
For **new systems with new parts**, choosing Intel is no longer recommended.<sup>2</sup> If you already own an Intel-based system or are buying used, Intel is fine. Read the footnotes for more information.
::: 
- **AMD**: Offers excellent multi-core performance and value. Common series: Ryzen 3/5/7/9.

### Why Avoid Intel?

- ❌ **Power hungry**: Modern Intel CPUs often require better (read: expensive) coolers and bigger PSUs.
- ❌ **Platform churn**: Intel switches sockets often, which means that upgrade paths are shorter.
- ❌ **Less value**: AMD often gives you more cores and better upgrade paths for the same money.
- ❌ **Scandals**: Intel has faced major criticism in recent years.<sup>2</sup>

Unless you're chasing niche workloads or getting a killer deal, **stick with AMD Ryzen** (Ryzen 5000 or 7000 series).

## The Nomenclature

> The numbers, Mason. What do they mean?

CPU models follow a very specific naming scheme that allows you to easily identify their performance based on their name.

### The Tier

The first number in any processor defines the performance tier. For example:

- **3** represents low-end CPUs. These are entry-level CPUs that are great for everyday activities but don't offer outstanding performance.
    - **Examples**: Intel Core i3 12100F, AMD Ryzen 3 4100.
- **5** represents midrange CPUs. This is suitable for most games and workloads.
    - **Examples**: Intel Core i5 12400F, Intel Core Ultra 5 225F, AMD Ryzen 5 5600.
- **7** is the high-end tier. These processors offer great performance and cover virtually all applications.
    - **Examples**: Intel Core i7 12700KF, Intel Core Ultra 7 265K, AMD Ryzen 7 7800X3D.
- **9** represents the ultra-high-end CPUs. Unless you're handling absurd amounts of data, stick with a 3, 5, or 7.
    - **Examples**: Intel Core i9 14900K, Intel Core Ultra 9 285K, AMD Ryzen 9 9950X.

CPU model names often have letters with specific meanings:

### AMD
- **G**: Has integrated graphics (e.g., 5600G)
- **X**: Higher clock speed (no cooler)
- **X3D**: Extra V3 cache for gaming (no cooler)
- **No letter**: Standard version

### Intel
- **F**: No integrated graphics (e.g., i5-12400F)
- **K**: Unlocked for overclocking (needs Z-series board)
- **KF**: Unlocked + no graphics
- **T**: Power-efficient (low performance)
- **Ultra**: New naming scheme for laptop-like chips

### AMD's X3D Chips

AMD’s **X3D CPUs** (like the Ryzen 7 5800X3D or 7800X3D) use extra cache to boost gaming performance *without needing high clocks or power*.

- Super efficient
- Incredible frame rates
- Great long-term value

If you game and don’t want to overspend on GPUs, consider one.

### Socket Names

- **AMD AM4**: Used for Ryzen 1000–5000 CPUs (DDR4, up to PCIe 4.0).
- **AMD AM5**: Newer socket for Ryzen 7000-9000 CPUs (DDR5, up to PCIe 5.0).
- **Intel LGA1700**: Used for 12th–14th gen Core CPUs (DDR4 or DDR5, up to PCIe 5.0).
- **Intel LGA1851**: New socket for Core Ultra (DDR5, up to PCIe 5.0).

🧠 Match CPU and motherboard socket. No compatibility means, well, **the chip literally will not fit in the socket.**

## Core Count: 6 is the minimum

- **6 cores / 12 threads** is the new baseline in 2025.
- Games and software now benefit from more threads.
- Avoid 4-core CPUs unless it’s an ultra-budget build *with a clear upgrade plan.*

## Avoid Overspending

Don't fall into the trap of buying a top-tier CPU you won’t fully use. Ask yourself:

- Do I **game**? Mid-tier Ryzen is enough.
- Do I **edit video/render 3D**? Maybe go 8+ cores.
- Do I just **browse + game lightly**? Even older 6-core chips work great.

Put more money towards your GPU, storage, or display instead.

## Buying AliExpress

> What? AliExpress? I don't trust that site, it's full of scams and cheap quality products.

Contrary to popular belief, AliExpress is a goldmine for used or OEM CPUs — especially older Ryzen chips.

Buying from AliExpress, *while slightly riskier than buying new*, saves you so much money, and is great for budget builds.

### Tips When Buying
- Stick to **trusted sellers with reviews**
- Know your **motherboard’s BIOS version** (may need update)
- Be aware of **import tax & shipping time**
- Great for **Ryzen 5 3600, Ryzen 5 5600, etc.**

### Price Comparisons
| Chip | Brand New | AliExpress |
|:----:|:---------:|:----------:|
| **Ryzen 5 3600** | ~$90 | ~$53 |
| **Ryzen 5 5500** | ~$80 | ~$56 |
| **Ryzen 5 5600** | ~$125 | ~$75 |
| **Ryzen 5 5600X** | ~$135 | ~$82 |
| **Ryzen 7 7700** | ~$150 | ~$103 |
| **Ryzen 5 7500F** | N/A | ~$125 |
| **Ryzen 7 7700** | ~$270 | ~$170 |



## PCIe Support: Why It Matters

PCIe (Peripheral Component Interconnect Express) lanes let your GPU and SSDs communicate with the CPU.

- **PCIe 3.0**: Slower but still okay for older GPUs/SSDs.
- **PCIe 4.0**: Standard for modern builds.
- **PCIe 5.0**: Future-proof, but only needed for top-end GPUs or Gen 5 SSDs.

Check that your CPU *and* motherboard support the same PCIe version for your GPU.

## Integrated Graphics (iGPU)

An iGPU is essentially an integrated graphics card in a CPU. They're useful if your GPU fails or if it's being used for non-video output (e.g. crypto mining).

iGPUs tend to be very weak in performance<sup>1</sup>

Gaming with these cards is generally not recommended unless you're on a very strict budget a

AMD calls theirs "**APUs**" (e.g., Ryzen 5600G). Intel just calls it **UHD Graphics** or **Xe**. X3D chips **do NOT** include integrated graphics!

## Bundled Coolers: Free Value

- Many **Ryzen non-X** CPUs include a **Wraith cooler**.
- These are actually pretty solid for 65W chips.
- Save money if you're not overclocking or pushing temps.

If you go with an **X or X3D chip**, check — they often come **without** a cooler.

## RAM & Memory Compatibility

- Match your CPU and motherboard to the **right RAM type** (DDR4 vs DDR5).
- Ryzen likes **fast RAM with low latency** (3600 CL16 for AM4, 6000 CL30 for AM5).
- Always check your motherboard’s **QVL (Qualified Vendor List)** for supported RAM.



## CPU Generations to Consider (2025 Edition)

| Brand | Entry | Mid-Range | High-End |
|-------|-------|-----------|----------|
| AMD | Ryzen 5 5500 | Ryzen 5 5600 / 7600 | Ryzen 7 5800X3D / 7800X3D |
| Intel | — | i5-12400F (last-gen) | i5-13600KF (only if cheap) |

💡 **Ryzen 5000 (AM4)** still offers the best value in 2025 — loads of motherboards and coolers available

## Final Tips 🧠

- Start with a **6-core Ryzen** (5600 or 7600).
- Check your **motherboard socket, RAM, BIOS support**.
- Use **AliExpress** to stretch your budget.
- Don’t overspend on CPU if you're gaming — GPU matters more.
- X3D chips are elite for gaming, but only if you want max FPS.
- Always check **real-world benchmarks**, not just specs.

---

Happy building, and may your thermals be chill and your framerates high! 🚀