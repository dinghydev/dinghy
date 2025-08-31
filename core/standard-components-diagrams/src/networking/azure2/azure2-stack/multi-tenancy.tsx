import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTI_TENANCY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Multi_Tenancy.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 65,
}

export function MultiTenancy(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_TENANCY}
      {...props}
      _style={extendStyle(MULTI_TENANCY, props)}
    />
  )
}
