import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/File.svg;strokeColor=none;',
  },
  _width: 56.00000000000001,
  _height: 69,
}

export function File(props: DiagramNodeProps) {
  return <Shape {...FILE} {...props} _style={extendStyle(FILE, props)} />
}
