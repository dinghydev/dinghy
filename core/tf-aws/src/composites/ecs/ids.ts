import { getRenderOptions, toId } from '@dinghy/base-components'
import type { EcsClusterType, EcsServiceType } from './types.ts'

// Central place for deriving Terraform resource IDs across the composite so
// that every file reaches the same address without prop drilling.

export function executionRoleName(): string {
  return `${getRenderOptions().stack.name}-execution-role`
}

export function taskRoleName(): string {
  return `${getRenderOptions().stack.name}-task-role`
}

// ALB-related IDs — only meaningful when the cluster has an `alb` block.

export function albSgId(cluster: EcsClusterType): string {
  return toId(`${toId(cluster.name)}_alb_sg`)
}

export function listenerId(cluster: EcsClusterType, port: number): string {
  return toId(`${toId(cluster.name)}_${port}_listener`)
}

// ACM certificate rendered by <AlbSsl> when HTTPS ports exist and the
// user hasn't supplied `alb.certificate_arn` explicitly.
export function certId(cluster: EcsClusterType): string {
  return toId(`${toId(cluster.name!)}_alb_cert`)
}

// Service names are globally unique within a stack (parseEcsClusters
// prefixes with the cluster name), so we can scope these IDs on the
// service alone and skip the cluster threading.
export function tgId(service: EcsServiceType): string {
  return toId(`awslbtargetgroup_${service.name}`)
}

export function listenerRuleId(
  cluster: EcsClusterType,
  port: number,
  service: EcsServiceType,
): string {
  return toId(`${toId(cluster.name!)}_${port}_${service.name}_rule`)
}

// EFS-related IDs — only meaningful for services that opted into a per-
// service EFS via `service.efs`. Service.name is already cluster-scoped
// (parseEcsClusters prefixes it), so `service.name` + key is globally
// unique across multiple clusters in one stack.

export function efsId(service: EcsServiceType, key: string): string {
  return toId(`awsefsfilesystem_${service.name}_${key}`)
}

export function efsAccessPointId(
  service: EcsServiceType,
  key: string,
): string {
  return toId(`awsefsaccesspoint_${service.name}_${key}`)
}
