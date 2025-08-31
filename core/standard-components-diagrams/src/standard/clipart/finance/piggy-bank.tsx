import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIGGY_BANK = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Piggy_Bank_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function PiggyBank(props: DiagramNodeProps) {
  return (
    <Shape {...PIGGY_BANK} {...props} _style={extendStyle(PIGGY_BANK, props)} />
  )
}
