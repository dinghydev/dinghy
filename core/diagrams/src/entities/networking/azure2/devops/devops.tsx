import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEVOPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Azure_DevOps.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function Devops(props: DiagramNodeProps) {
  return <Shape {...DEVOPS} {...props} _style={extendStyle(DEVOPS, props)} />
}
