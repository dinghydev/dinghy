import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIGGY_BANK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/finance/Piggy_Bank_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function PiggyBank(props: DiagramNodeProps) {
  return (
    <Shape {...PIGGY_BANK} {...props} _style={extendStyle(PIGGY_BANK, props)} />
  )
}
