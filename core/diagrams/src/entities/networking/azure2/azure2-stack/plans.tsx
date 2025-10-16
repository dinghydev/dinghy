import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PLANS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Plans.svg;strokeColor=none;',
  },
  _original_width: 52,
  _original_height: 64,
}

export function Plans(props: DiagramNodeProps) {
  return <Shape {...PLANS} {...props} _style={extendStyle(PLANS, props)} />
}
