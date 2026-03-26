#!/bin/bash
REPO="https://github.com/openclaw/openclaw.git"
VERSIONS=(
  "v2026.1.5"    # 第一个2026版本(原clawdbot)
  "v2026.1.8"    # DM锁定+autoReply移除
  "v2026.1.10"   # exec默认allowlist+多命令禁用
  "v2026.1.15"   # Teams移至插件
  "v2026.1.20"   # 未知配置拒绝启动
  "v2026.1.29"   # auth-none移除+browser独立控制移除
  "v2026.2.1"    # TLS1.3要求+LD/DYLD封锁
  "v2026.2.9"    # soul-evil最后存在+session工具限制
  "v2026.2.12"   # soul-evil移除+安全大扫荡
  "v2026.2.13"   # 插件自动加载禁用+jq移除
  "v2026.2.15"   # 大量安全收紧
  "v2026.2.19"   # SSRF扩展+rate limit+admin scope
  "v2026.2.22"   # food-order移除+多处breaking
  "v2026.3.2"    # 中期稳定版
  "v2026.3.12"   # workspace插件禁用+leaf限制
  "v2026.3.22"   # nano-banana-pro移除+extension-api移除
  "v2026.3.24"   # 当前最新
)

for VER in "${VERSIONS[@]}"; do
  DIR="${VER#v}"
  if [ -d "$DIR" ]; then
    echo "SKIP $VER (already exists)"
    continue
  fi
  echo "=== Cloning $VER ==="
  git clone --depth 1 --branch "$VER" "$REPO" "$DIR" 2>&1 | tail -1
done
echo "=== Done ==="
