import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_STOREFRONT = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.cloud_storefront;',
  },
  _width: 50,
  _height: 39.879999999999995,
}

export function CloudStorefront(props: NodeProps) {
  return (
    <Shape
      {...CLOUD_STOREFRONT}
      {...props}
      _style={extendStyle(CLOUD_STOREFRONT, props)}
    />
  )
}
