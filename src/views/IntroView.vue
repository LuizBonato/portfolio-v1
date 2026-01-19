<template>
  <div class="intro-page">
    <ProfileCard
      name="Luiz Bonato"
      title="Automation & Backend Developer"
      handle="luizbonato"
      status="Online"
      contact-text="Explore Projects"
      avatar-url="/perfil.png"
      mini-avatar-url="/perfil1.png"
      :show-behind-gradient="true"
      :enable-tilt="true"
      @contact-click="goPortfolio"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ProfileCard from "@/components/ProfileCard.vue";

const router = useRouter();
const goPortfolio = () => router.push('/home');
</script>

<style scoped>
.intro-page{
  background: #12192a;
  min-height: 100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 24px;
}
</style>
