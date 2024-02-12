<template>
  <div :style="$q.screen.gt.xs ? 'width: 100%; height: 100%' : 'width: 400px'">
    <q-carousel
      class="header-buttons"
      animated
      v-model="slide"
      :arrows="$q.screen.gt.xs"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      navigation
      :style="$q.screen.gt.xs ? 'height: 500px' : 'height: 300px'"
    >
      <q-carousel-slide :name="1" img-src="~assets/stadium-1.jpg">
        <div
          class="row q-pr-xl"
          style="float: right; padding-right: 200px"
          v-if="$q.screen.gt.sm"
        >
          <q-img
            src="~assets/slider-1.png"
            style="width: 200px; height: 450px"
          ></q-img>
        </div>
        <div
          class="absolute-left text-white q-pt-xl"
          :style="$q.screen.gt.xs ? 'width: 600px; padding-left: 100px' : ''"
        >
          <div
            :class="$q.screen.gt.xs ? 'q-pt-xl' : 'q-pt-xl'"
            :style="
              $q.screen.gt.xs
                ? 'width: 600px; font-size: 55px'
                : 'text-align: center; font-size: 20px; padding-top: 70px'
            "
          >
            Uma jogada bem agenciada pode mudar sua história
          </div>
          <div v-if="$q.screen.gt.xs" style="width: 680px">
            Gerenciamos carreiras de craques do futebol: Da base ao
            profissional, do primeiro chute ao gol da vitória. Com o
            comprometimento que o seu sonho merece.
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="~assets/stadium-2.jpg">
        <div
          class="text-center text-white q-pt-xl"
          :style="$q.screen.gt.xs ? '' : ''"
        >
          <div
            :style="
              $q.screen.gt.xs
                ? 'font-size: 65px; padding-top: 100px'
                : 'text-align: Center; font-size: 20px; padding-top: 50px'
            "
          >
            Criando oportunidades e soluções para atletas
          </div>
          <div v-if="$q.screen.gt.xs">
            É comprovado: Atletas representados por agentes têm salários
            melhores e contratos mais duradouros. Confie em nosso trabalho e
            alcance o sucesso que você merece no mundo do futebol.
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="~assets/stadium-3.jpg">
        <div
          class="row q-pr-xl"
          style="float: right; padding-right: 200px"
          v-if="$q.screen.gt.sm"
        >
          <q-img
            src="~assets/player-2.png"
            style="width: 200px; height: 450px"
          ></q-img>
        </div>
        <div
          class="absolute-left text-white q-pt-xl"
          :style="$q.screen.gt.xs ? 'width: 600px; padding-left: 100px' : ''"
        >
          <div
            class="q-pt-xl"
            :style="
              $q.screen.gt.xs
                ? 'width: 600px; font-size: 55px'
                : 'text-align: center; font-size: 20px; padding-top: 70px'
            "
          >
            A vitória é garantida para quem se dedica
          </div>
          <div v-if="$q.screen.gt.xs" style="width: 680px">
            A FKA está sempre em busca de novos talentos que querem vencer e
            desejam crescer mais do que seus próprios sonhos. Se você é um
            atleta que tem essa ambição, então a FKA é o lugar ideal para você.
            Acreditamos que cada atleta tem um potencial único e procuramos
            desenvolver esse potencial ao máximo para alcançar grandes feitos
            nos esportes. Acreditamos que o sucesso vem daqueles que se esforçam
            e estão determinados a alcançar seus objetivos. Se você é um desses
            atletas entre em contato conosco.
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div
    class="bg-white full-width q-pt-xl"
    :style="$q.screen.gt.xs ? 'padding-left: 100px' : ''"
  >
    <div
      class="col-lg-8"
      :style="
        $q.screen.gt.xs
          ? 'font-size: 24px; padding-left: 100px'
          : 'font-size: 24px; padding-left: 25px'
      "
    >
      <span>Últimas Notícias</span>
      <div class="underline-notice q-mt-sm"></div>
    </div>
    <div class="col-lg-8 q-pt-md q-pb-md q-pl-md">
      <p>{{ notice }}</p>
    </div>
  </div>
  <div
    class="bg-grey-8"
    :style="
      $q.screen.gt.xs ? 'width: 100%; padding-left: 100px' : 'width: 100%; '
    "
  >
    <div
      class="text-white q-pb-md q-pt-xl"
      :style="
        $q.screen.gt.xs
          ? 'font-size: 24px; padding-left: 100px'
          : 'font-size: 24px; padding-left: 25px'
      "
    >
      <span>Últimos Vídeos</span>
      <div class="underline-video q-mt-sm"></div>
      <div class="row flex full-width q-pt-lg">
        <div
          :class="$q.screen.gt.xs ? 'col-lg-8' : ' q-pl-lg q-pb-md'"
          :style="$q.screen.gt.xs ? 'width: 700px' : 'width: 275px'"
        >
          <div>
            <q-video
              :ratio="16 / 9"
              src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
            />
          </div>
        </div>
        <div class="col-lg-4 q-pl-lg">
          <div class="col" style="width: 250px">
            <q-video
              :ratio="16 / 9"
              src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
            />
          </div>
          <div class="col q-pt-md" style="width: 250px">
            <q-video
              :ratio="16 / 9"
              src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
            />
          </div>
          <div class="col q-pt-md" style="width: 250px">
            <q-video
              :ratio="16 / 9"
              src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white full-width">
    <div class="bg-white full-width q-mt-xl">
      <div
        :style="
          $q.screen.gt.xs
            ? 'font-size: 24px; padding-left: 100px'
            : 'font-size: 24px; padding-left: 25px'
        "
      >
        Galeria
        <div class="underline-galery q-mt-sm"></div>
      </div>

      <div class="row justify-center q-mt-xl">
        <div class="bg-gray-5 q-pa-md">
          <img
            :src="imagemSrc"
            alt="Imagem 1"
            class="gallery-image"
            :width="$q.screen.gt.xs ? '400' : '330'"
            style="max-width: 400px; max-height: 345px"
          />
        </div>
        <div class="bg-gray-5 q-pa-md">
          <img
            src="~assets/galeria-02.jpg"
            alt="Imagem 2"
            class="gallery-image"
            :width="$q.screen.gt.xs ? '400' : '330'"
          />
        </div>
        <div class="bg-gray-5 q-pa-md">
          <img
            src="~assets/galeria-03.jpg"
            alt="Imagem 3"
            class="gallery-image"
            :width="$q.screen.gt.xs ? '400' : '330'"
          />
        </div>
        <div class="bg-gray-5 q-pa-md">
          <img
            src="~assets/galeria-04.jpg"
            alt="Imagem 4"
            class="gallery-image"
            :width="$q.screen.gt.xs ? '400' : '330'"
          />
        </div>
        <div class="bg-gray-5 q-pa-md">
          <img
            src="~assets/galeria-05.jpg"
            alt="Imagem 5"
            class="gallery-image"
            :width="$q.screen.gt.xs ? '400' : '330'"
          />
        </div>
        <div class="bg-gray-5 q-pa-md">
          <img
            src="~assets/galeria-06.jpg"
            alt="Imagem 6"
            class="gallery-image"
            :width="$q.screen.gt.xs ? '400' : '330'"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg-white full-width col-md-12"
    :style="$q.screen.gt.xs ? 'padding-left: 100px' : 'padding-left: 25px'"
  >
    <div class="text-left q-pb-md q-pt-xl" style="font-size: 24px">
      Avaliação
      <div class="underline-aval q-mt-sm"></div>
    </div>
    <div class="text-left">
      <div :class="$q.screen.gt.xs ? 'row' : ''">
        <q-carousel
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="primary"
          padding
          infinite
          v-model="slide3"
          height="400px"
        >
          <q-carousel-slide name="first" class="row">
            <q-img
              src="~assets/noimg.jpg"
              :style="
                $q.screen.gt.xs
                  ? 'width: 140px; height: 140px'
                  : 'width: 140px; height: 140px; margin-left: 100px'
              "
            ></q-img>
            <div :class="$q.screen.gt.xs ? 'col q-pl-lg' : 'q-pt-md'">
              <div>WILLIAM PETER</div>
              <div>CEO Founder</div>
              <div class="q-gutter-y-md">
                <q-rating
                  v-model="ratingModel"
                  size="2em"
                  color="primary"
                  icon="star_border"
                  icon-selected="star"
                  readonly
                />
              </div>
              <p
                :class="
                  $q.screen.gt.xs
                    ? 'col text-italic q-pt-md q-pb-xl'
                    : 'col text-italic q-pt-md q-pl-md q-pb-xl'
                "
                style="font-size: 16px"
              >
                Texto sobre a avaliação. Texto sobre a avaliação. Texto sobre a
                avaliação. Texto sobre a avaliação. Texto sobre a avaliação.
                Texto sobre a avaliação. Texto sobre a avaliação.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="second" class="row">
            <q-img
              src="~assets/noimg.jpg"
              :style="
                $q.screen.gt.xs
                  ? 'width: 140px; height: 140px'
                  : 'width: 140px; height: 140px; margin-left: 100px'
              "
            ></q-img>
            <div :class="$q.screen.gt.xs ? 'col q-pl-lg' : 'q-pt-md'">
              <div>IAN KRISTIAN</div>
              <div>Office Manager</div>
              <div class="q-gutter-y-md">
                <q-rating
                  v-model="ratingModel"
                  size="2em"
                  color="primary"
                  icon="star_border"
                  icon-selected="star"
                  readonly
                />
              </div>
              <p
                :class="
                  $q.screen.gt.xs
                    ? 'col text-italic q-pt-md q-pb-xl'
                    : 'col text-italic q-pt-md q-pl-md q-pb-xl'
                "
                style="font-size: 16px"
              >
                Texto sobre a avaliação. Texto sobre a avaliação. Texto sobre a
                avaliação. Texto sobre a avaliação. Texto sobre a avaliação.
                Texto sobre a avaliação. Texto sobre a avaliação.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="third" class="row">
            <q-img
              src="~assets/noimg.jpg"
              :style="
                $q.screen.gt.xs
                  ? 'width: 140px; height: 140px'
                  : 'width: 140px; height: 140px; margin-left: 100px'
              "
            ></q-img>
            <div :class="$q.screen.gt.xs ? 'col q-pl-lg' : 'q-pt-md'">
              <div>TOM WILLIAMSON</div>
              <div>Office Manager</div>
              <div class="q-gutter-y-md">
                <q-rating
                  v-model="ratingModel"
                  size="2em"
                  color="primary"
                  icon="star_border"
                  icon-selected="star"
                  readonly
                />
              </div>
              <p
                :class="
                  $q.screen.gt.xs
                    ? 'col text-italic q-pt-md q-pb-xl'
                    : 'col text-italic q-pt-md q-pl-md q-pb-xl'
                "
                style="font-size: 16px"
              >
                Texto sobre a avaliação. Texto sobre a avaliação. Texto sobre a
                avaliação. Texto sobre a avaliação. Texto sobre a avaliação.
                Texto sobre a avaliação. Texto sobre a avaliação.
              </p>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <p class="q-pl-md flex q-pr-md">Exemplo PAINEL</p>

        <q-color
          class="q-pa-md"
          v-model="primaryColor"
          @update:modelValue="updatePrimaryColor"
        />
        <q-btn
          :class="$q.screen.gt.xs ? 'q-ml-md' : 'q-mt-md'"
          label="Trocar Logo"
          class="header-bg text-white"
          style="width: 200px; height: 50px"
          @click="triggerFileInput"
        />
        <div>
          <input
            type="file"
            @change="uploadLogo"
            ref="fileInput"
            style="display: none"
          />
        </div>
        <q-btn
          :class="$q.screen.gt.xs ? 'q-ml-md' : 'q-mt-md'"
          label="Trocar Imagem"
          class="header-bg text-white"
          style="width: 200px; height: 50px"
          @click="triggerImgInput"
        />

        <div>
          <input
            type="file"
            @change="uploadImg"
            ref="imgInput"
            style="display: none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useQuasar } from "quasar";
import imgSrc from "../assets/noimg.jpg";

const emit = defineEmits(["logo-updated"]);
const $q = useQuasar();

const fileInput = ref(null);
const imgInput = ref(null);
const imagemSrc = ref(imgSrc);
const notice = ref("Nenhuma notícia cadastrada até o momento.");
const primaryColor = ref("#fbc02d");
const ratingModel = ref(4);
const slide = ref(1);
const slide3 = ref("first");

const updatePrimaryColor = (color) => {
  primaryColor.value = color;
  document.documentElement.style.setProperty("--primary", color);
};
const uploadImg = (event) => {
  const files = event.target.files;
  if (files && files[0]) {
    const reader = new FileReader();

    reader.onload = (e) => {
      imagemSrc.value = e.target.result;
    };

    reader.readAsDataURL(files[0]);
  }
};
const uploadLogo = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      emit("logo-updated", e.target.result);
    };
    reader.readAsDataURL(file);
  }
};
const triggerFileInput = () => {
  fileInput.value.click();
};
const triggerImgInput = () => {
  imgInput.value.click();
};
</script>
