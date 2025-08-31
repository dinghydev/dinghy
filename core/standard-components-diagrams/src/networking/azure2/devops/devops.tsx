import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVOPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Azure_DevOps.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Devops(props: DiagramNodeProps) {
  return <Shape {...DEVOPS} {...props} _style={extendStyle(DEVOPS, props)} />
}
