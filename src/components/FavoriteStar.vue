<template>
    <div>       
        <button x-data="{ state:'Unliked', usedKeyboard: false, async updateState(to) 
            {   this.state = 'Saving'
                await new Promise(resolve => setTimeout(resolve, 1000))
                this.state = to
            }}" :class="{
                'like unliked': state === 'Unliked',
                'like saving': state === 'Saving',
                'like liked': state === 'Liked',
                'focus:outline-none': !usedKeyboard }"
        @click="updateState(state === 'Unliked' ? 'Liked' : 'Unliked')" @keydown.window.tab="usedKeyboard = true">
        <span class="like-icon like-icon-state" aria-label="state" x-text="state" aria-live="polite">Unliked</span>
        </button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.like {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #44434380;
  position: relative;
  cursor: pointer;
  transition: background-color 0.25s ease;
  overflow: hidden;
}

.like:hover {
  background: rgb(64, 63, 63);
  transition: background-color 0.25s ease;
}

.liked .like-icon-state {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewbox='0 0 100 100'><path fill='%23de3618' d='M50,88.87 C76.67,70.46 90,53.9 90,39.17 C90,17.08 63.12,3.84 50,27.63 C38.875,3.85 10,17.08 10,39.17 C10,53.9 23.33,70.46 50,88.87 Z'/></svg>");
}

.unliked .like-icon-state {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewbox='0 0 100 100'><path fill='none' stroke='%23666' stroke-width='5' d='M50,88.87 C76.67,70.46 90,53.9 90,39.17 C90,17.08 63.12,3.84 50,27.63 C38.875,3.85 10,17.08 10,39.17 C10,53.9 23.33,70.46 50,88.87 Z'/></svg>");
}

.like span {
  text-indent:-1000px;
  font-size:1px;
}


.like-icon {
  background-size: contain;
  position: absolute;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  top: 15%;
  right: 15%;
  bottom: 15%;
  left: 15%;
}

.liked .like-icon-state {
  transform: scale(0);
}

.liked .like-icon-state {
  opacity: 0;
  animation: 1.2s like-animation both cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

@keyframes like-animation {
  0% {
    transform: scale(0);
  }
  15% {
    transform: scale(1.25);
  }
  32% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.unliked .like-icon-state {
  opacity: 0;
  animation: 1.2s unlike-animation both cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

@keyframes unlike-animation {
  0% {
    transform: scale(0);
  }
  15% {
    transform: scale(1.1);
  }
  30% {
    transform: scale(0.98);
  }
  45% {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.like::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.75);
  transform: scale(0);
}

.liked::before {
  animation: 1.2s bg-ring-animation both;
}

@keyframes bg-ring-animation {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  10% {
    transform: scale(1.5);
    opacity: 0.25;
  }
  15% {
    transform: scale(2);
    opacity: 0.15;
  }
  45% {
    transform: scale(3.25);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}

.saving::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
  border: .15em solid rgba(100,100,100,.5);
  border-radius: 50%;
  border-right-color: transparent;
  border-top-color: transparent;
  animation: spin-animation 400ms infinite linear;
}

@keyframes spin-animation {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>