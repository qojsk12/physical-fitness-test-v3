import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/physical-fitness-test-v2.0/',
  plugins: [react()],
});
