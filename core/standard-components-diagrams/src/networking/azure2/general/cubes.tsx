import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUBES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Cubes.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 68,
}

export function Cubes(props: DiagramNodeProps) {
  return <Shape {...CUBES} {...props} _style={extendStyle(CUBES, props)} />
}
