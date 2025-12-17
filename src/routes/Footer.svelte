<script lang="ts">
  import GradientDivider from '$lib/components/GradientDivider.svelte';
  import kontakBG from '$lib/assets/kontak-bg.png';
  import logo1 from '$lib/assets/logo1.png';
  import Title from '$lib/components/Title.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import InputField from '$lib/components/InputField.svelte';
  import PrimaryButton from '$lib/components/PrimaryButton.svelte';
  import instagram from '$lib/assets/socmed-icons/instagram.png';
  import tiktok from '$lib/assets/socmed-icons/tiktok.png';
  import x from '$lib/assets/socmed-icons/x.png';
  import facebook from '$lib/assets/socmed-icons/facebook.png';
  import youtube from '$lib/assets/socmed-icons/youtube.png';
  import Modal from '$lib/components/Modal.svelte';

  const socmeds = [
    {
      name: 'Instagram',
      icon: instagram,
      url: 'https://www.instagram.com/cryptosharia'
    },
    {
      name: 'TikTok',
      icon: tiktok,
      url: 'https://tiktok.com/@cryptosharia'
    },
    {
      name: 'X',
      icon: x,
      url: 'https://x.com/cryptosharia_'
    },
    {
      name: 'Facebook',
      icon: facebook,
      url: 'https://facebook.com/cryptosharia'
    },
    {
      name: 'YouTube',
      icon: youtube,
      url: 'https://youtube.com/@cryptosharia'
    }
  ];

  let modalVisible = $state(false);
  let isSendingEmail = $state(false);
  let isSendingEmailError = $state(false);
  let isSendingEmailSuccess = $state(false);

  async function sendEmail(e: Event) {
    e.preventDefault();

    isSendingEmail = true;
    isSendingEmailError = false;
    isSendingEmailSuccess = false;

    const name = (document.querySelector('#contact-form #name') as HTMLInputElement).value;
    const sender = (document.querySelector('#contact-form #email') as HTMLInputElement).value;
    const message = (document.querySelector('#contact-form #message') as HTMLTextAreaElement).value;

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender, name, message })
      });

      if (!res.ok) {
        throw new Error('Failed to send email');
      }

      isSendingEmailSuccess = true;
    } catch (error) {
      console.error(error);

      isSendingEmailError = true;
    }

    isSendingEmail = false;
  }
</script>

<footer id="kontak" class="mt-14 w-full">
  <GradientDivider size="large" />
  <div
    class="w-full bg-cover bg-center"
    style="background-image: url({kontakBG}); background-attachment: fixed;"
  >
    <div class="bg-black/50 pt-13 pb-3">
      <div
        class="mx-auto flex max-w-[90%] flex-col sm:max-w-[36rem] lg:max-w-[90%] lg:flex-row lg:gap-x-8 xl:max-w-[70rem] xl:gap-x-12"
      >
        <div data-aos="fade-right" data-aos-duration="1000" class="flex-1">
          <Title aos={false} class="text-center text-white">Kontak Kami</Title>
          <Divider usePadding={false} />
          <form id="contact-form" class="mt-3.5 flex flex-col" onsubmit={sendEmail}>
            <div class="flex flex-col gap-y-3">
              <InputField
                id="name"
                type="text"
                required={true}
                label="Nama"
                hint="Masukkan nama anda"
              />
              <InputField
                id="email"
                type="email"
                required={true}
                label="Alamat Email"
                hint="Masukkan alamat email anda"
              />
              <InputField
                id="message"
                type="multiline"
                required={true}
                label="Pesan"
                hint="Masukkan pesan anda"
              />
            </div>
            <div
              class="flex flex-col gap-y-1 {isSendingEmail ||
              isSendingEmailError ||
              isSendingEmailSuccess
                ? 'mt-1.5'
                : 'mt-3'}"
            >
              {#if isSendingEmailError && !isSendingEmail}
                <span class="text-base text-white italic"
                  >Gagal mengirim email, silahkkan chat WhatsApp saja!</span
                >
              {:else if isSendingEmailSuccess && !isSendingEmail}
                <span class="text-base text-white italic"
                  >Email berhasil dikirim, terima kasih!</span
                >
              {:else if isSendingEmail}
                <span class="text-base text-white italic">Mengirim email...</span>
              {/if}
              <button type="submit">
                <PrimaryButton aos={false} text="✉️ Kirim Email" size="small" extend={true} />
              </button>
              <Divider usePadding={false} />
              <PrimaryButton
                openInNewTab={true}
                aos={false}
                text="💬 Chat WhatsApp"
                href="https://wa.me/6282186584279"
                size="small"
                extend={true}
              />
            </div>
          </form>
        </div>
        <div class="flex flex-1 flex-col-reverse gap-y-12 max-lg:mt-12 lg:flex-col lg:gap-y-9">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <Title aos={false} class="text-center text-white">Media Sosial</Title>
            <Divider usePadding={false} />
            <div class="mx-auto lg:max-w-[90%]">
              <div class="my-8 flex flex-row items-center justify-between px-2">
                {#each socmeds as socmed}
                  <a href={socmed.url} target="_blank" class="transition-transform hover:scale-115">
                    <img src={socmed.icon} alt={socmed.name} class="w-12" />
                  </a>
                {/each}
              </div>
              <!-- <PrimaryButton
                openInNewTab={true}
                aos={false}
                text="👥 Grup WhatsApp Komunitas"
                href="#"
                size="small"
                extend={true}
              /> -->
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <Title aos={false} class="text-center text-white"
              >Support <i class="text-orange-600">CryptoSharia</i></Title
            >
            <Divider usePadding={false} />
            <div class="mx-auto mt-5 flex flex-col justify-between gap-y-3 lg:max-w-[90%]">
              <div class="rounded-xl border-2 border-orange-600 bg-white p-3">
                <p class="text-center text-slate-700">
                  Satu donasi kecil hari ini, bisa menjadi investasi besar di akhirat. Mari dukung
                  gerakan edukasi <i><b>CryptoSharia</b></i>, agar ilmu dan pahala terus mengalir
                  tanpa henti.
                </p>
              </div>
              <PrimaryButton
                aos={false}
                text="💸 Support"
                size="small"
                extend={true}
                onclick={() => (modalVisible = true)}
              />
              <Modal bind:modalVisible>
                <div class="w-80 sm:w-120">
                  <span class="block text-center text-2xl font-semibold text-orange-600">
                    Rekening Donasi
                  </span>
                  <Divider usePadding={false} />
                  <ul class="mt-3 space-y-2">
                    <li class="flex justify-between">
                      <span>Bank:</span>
                      <span>BSI</span>
                    </li>
                    <li class="flex justify-between">
                      <span>No. Rekening:</span>
                      <span>7316831669</span>
                    </li>
                    <li class="flex justify-between">
                      <span>Atas Nama:</span>
                      <span>Habibullah Haidar</span>
                    </li>
                  </ul>
                  <Divider usePadding={false} />
                  <p class="mt-2 text-center text-orange-600">
                    <i>Jazakumullahu Khairan atas dukungannya</i>
                  </p>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        class="mx-auto mt-10 flex max-w-54 flex-col"
        style="letter-spacing: 1.5px;"
      >
        <a href="/" class="flex flex-col items-center gap-y-0.5">
          <span class="flex size-12.5 items-center justify-center rounded-full bg-white">
            <img src={logo1} alt="CryptoSharia" class="size-12" />
          </span>
          <span class="strokeme text-2xl font-semibold text-orange-600">CryptoSharia</span>
        </a>
        <Divider usePadding={false} />
        <span class="text-center text-slate-200"
          >&copy; 2025 - CryptoSharia<br />All rights reserved.</span
        >
      </div>
    </div>
  </div>
</footer>

<style>
  .strokeme {
    text-shadow:
      -1.1px -1.1px 0 #fff,
      1.1px -1.1px 0 #fff,
      -1.1px 1.1px 0 #fff,
      1.1px 1.1px 0 #fff;
  }
</style>
