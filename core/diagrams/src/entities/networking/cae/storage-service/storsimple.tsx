import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORSIMPLE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/StorSimple.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function Storsimple(props: NodeProps) {
  return (
    <Shape {...STORSIMPLE} {...props} _style={extendStyle(STORSIMPLE, props)} />
  )
}
