import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSTRUCTION_WORKER_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Construction_Worker_Woman_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ConstructionWorkerWoman(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONSTRUCTION_WORKER_WOMAN}
      {...props}
      _style={extendStyle(CONSTRUCTION_WORKER_WOMAN, props)}
    />
  )
}
