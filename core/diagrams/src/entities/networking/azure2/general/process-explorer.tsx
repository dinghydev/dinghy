import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROCESS_EXPLORER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Process_Explorer.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 68,
}

export function ProcessExplorer(props: NodeProps) {
  return (
    <Shape
      {...PROCESS_EXPLORER}
      {...props}
      _style={extendStyle(PROCESS_EXPLORER, props)}
    />
  )
}
