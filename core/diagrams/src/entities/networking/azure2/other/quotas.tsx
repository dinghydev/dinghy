import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const QUOTAS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Quotas.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 48,
}

export function Quotas(props: DiagramNodeProps) {
  return <Shape {...QUOTAS} {...props} _style={extendStyle(QUOTAS, props)} />
}
