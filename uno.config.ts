import { defineConfig } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import presetWind3 from '@unocss/preset-wind3'

export default defineConfig({
    rules: [
        ['m-11233123', { margin: '0.25rem' }],
    ],
    presets: [
        presetAttributify({
            prefix: 'un-',
            prefixedOnly: true, // <--
        }),
        presetWind3({
            important: '#app'
        })
    ]
})