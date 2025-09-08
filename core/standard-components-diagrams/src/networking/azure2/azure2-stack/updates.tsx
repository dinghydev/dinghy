import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UPDATES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Updates.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 67,
}

export function Updates(props: DiagramNodeProps) {
  return <Shape {...UPDATES} {...props} _style={extendStyle(UPDATES, props)} />
}
