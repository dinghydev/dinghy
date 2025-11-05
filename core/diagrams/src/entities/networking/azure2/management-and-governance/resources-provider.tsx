import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESOURCES_PROVIDER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Resources_Provider.svg;strokeColor=none;',
  },
  _original_width: 60.440000000000005,
  _original_height: 68,
}

export function ResourcesProvider(props: NodeProps) {
  return (
    <Shape
      {...RESOURCES_PROVIDER}
      {...props}
      _style={extendStyle(RESOURCES_PROVIDER, props)}
    />
  )
}
