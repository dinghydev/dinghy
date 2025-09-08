import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CMS_CLOUD_MONITOR_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cms_cloud_monitor_service;',
  },
  _original_width: 52.2,
  _original_height: 41.4,
}

export function CmsCloudMonitorService(props: DiagramNodeProps) {
  return (
    <Shape
      {...CMS_CLOUD_MONITOR_SERVICE}
      {...props}
      _style={extendStyle(CMS_CLOUD_MONITOR_SERVICE, props)}
    />
  )
}
