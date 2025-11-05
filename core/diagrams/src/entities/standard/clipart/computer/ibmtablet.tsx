import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IBMTABLET = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/IBM_Tablet_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Ibmtablet(props: NodeProps) {
  return (
    <Shape {...IBMTABLET} {...props} _style={extendStyle(IBMTABLET, props)} />
  )
}
