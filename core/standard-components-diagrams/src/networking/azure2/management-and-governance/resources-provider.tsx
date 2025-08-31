import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESOURCES_PROVIDER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Resources_Provider.svg;strokeColor=none;',
  _width: 60.440000000000005,
  _height: 68,
}

export function ResourcesProvider(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESOURCES_PROVIDER}
      {...props}
      _style={extendStyle(RESOURCES_PROVIDER, props)}
    />
  )
}
