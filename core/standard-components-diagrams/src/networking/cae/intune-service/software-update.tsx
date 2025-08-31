import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOFTWARE_UPDATE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Software_Update.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 45,
}

export function SoftwareUpdate(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOFTWARE_UPDATE}
      {...props}
      _style={extendStyle(SOFTWARE_UPDATE, props)}
    />
  )
}
