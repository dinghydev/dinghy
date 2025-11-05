import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_JOBS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Web_Jobs.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 68,
}

export function WebJobs(props: NodeProps) {
  return (
    <Shape {...WEB_JOBS} {...props} _style={extendStyle(WEB_JOBS, props)} />
  )
}
