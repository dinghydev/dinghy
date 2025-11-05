import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BILLINGHUB = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/BillingHub.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Billinghub(props: NodeProps) {
  return (
    <Shape {...BILLINGHUB} {...props} _style={extendStyle(BILLINGHUB, props)} />
  )
}
