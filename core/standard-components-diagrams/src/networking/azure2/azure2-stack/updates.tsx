import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UPDATES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Updates.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 67,
}

export function Updates(props: DiagramNodeProps) {
  return <Shape {...UPDATES} {...props} _style={extendStyle(UPDATES, props)} />
}
