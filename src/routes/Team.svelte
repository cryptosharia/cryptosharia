<script lang="ts">
  import Divider from '$lib/components/Divider.svelte';
  import TeamCard from '$lib/components/TeamCard.svelte';
  import Title from '$lib/components/Title.svelte';
  import pembina1 from '$lib/assets/team/pembina1.png';
  import pembina2 from '$lib/assets/team/pembina2.png';
  import pembina3 from '$lib/assets/team/pembina3.png';
  import pembina4 from '$lib/assets/team/pembina4.png';
  import pembina5 from '$lib/assets/team/pembina5.png';

  const people = [
    {
      name: 'K.H. Izzuddin Edi Siswanto, Lc., M.A., Ph.D.',
      bio: 'Members of DSN-MUI & DPS Dompet Dhuafa',
      image: pembina1
    },
    {
      name: 'Ustadz Ali Hasan Bawazier',
      bio: 'Chairman of the DPP Al Irsyad Association',
      image: pembina2
    },
    {
      name: 'Ustadz Devin Halim Wijaya, B.B.A., M. Sc.',
      bio: 'B.B.A. Administrative Management (LIPIA, Indonesia), & M.Sc. Islamic Economics (IIUM, Malaysia)',
      image: pembina3
    },
    {
      name: 'Ustadz Tengku M. Laksamana, B.Sc., B.A.',
      bio: 'B.Sc. Computer Science (USQ, Australia), B.A. Sharia (Al Rayyan, Yemen), & M.A. Islamic Economics (UIN Samarinda, ongoing)',
      image: pembina4
    },
    {
      name: 'Dea Saka Kurnia Putra, S.Tr.MP',
      bio: 'Founder of Asosiasi Aset Kripto Syariah Indonesia (AKSI) & Blockchain Society',
      image: pembina5
    }
  ];
</script>

<section id="team" class="nav-space w-full max-w-[90rem]">
  <Title class="text-center">CryptoSharia Team</Title>
  <Divider />
  <div
    class="mb-9 flex w-full flex-row flex-wrap items-start justify-center gap-x-8 gap-y-8 px-6 pt-5 md:gap-x-24 md:gap-y-12 lg:gap-x-30 xl:gap-x-40"
  >
    {#each people as person}
      <TeamCard name={person.name} bio={person.bio} image={person.image} />
    {/each}
  </div>
</section>
