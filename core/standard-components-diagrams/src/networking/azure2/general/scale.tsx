import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCALE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Scale.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Scale(props: DiagramNodeProps) {
  return <Shape {...SCALE} {...props} _style={extendStyle(SCALE, props)} />
}
