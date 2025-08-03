import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PIGGY_BANK = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Piggy_Bank_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function PiggyBank(props: DiagramNodeProps) {
  return <Shape {...PIGGY_BANK} {...props} />
}
