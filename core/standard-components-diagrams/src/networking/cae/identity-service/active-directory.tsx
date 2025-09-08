import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTIVE_DIRECTORY = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Active_Directory.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ActiveDirectory(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTIVE_DIRECTORY}
      {...props}
      _style={extendStyle(ACTIVE_DIRECTORY, props)}
    />
  )
}
