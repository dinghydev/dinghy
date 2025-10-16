import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTIVE_DIRECTORY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_Active_Directory.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 64,
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
