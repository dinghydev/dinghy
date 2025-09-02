import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_ENCLAVES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Virtual_Enclaves.svg;strokeColor=none;',
  },
  _original_width: 60.440000000000005,
  _original_height: 68,
}

export function VirtualEnclaves(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_ENCLAVES}
      {...props}
      _style={extendStyle(VIRTUAL_ENCLAVES, props)}
    />
  )
}
